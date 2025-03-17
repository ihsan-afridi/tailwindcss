import React, { useState, useEffect, useCallback } from 'react';

const Playground = () => {
    const GRID_SIZE = 20;
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 15, y: 15 });
    const [direction, setDirection] = useState('RIGHT');
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Generate new food position
    const generateFood = () => {
        const newFood = {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
        };
        setFood(newFood);
    };

    // Handle food click
    const handleFoodClick = () => {
        if (!gameOver) {
            setScore((prev) => prev + 5);
            generateFood();
        }
    };

    // Game loop
    const moveSnake = useCallback(() => {
        if (!isRunning || gameOver) return;

        setSnake((prevSnake) => {
            const newSnake = [...prevSnake];
            const head = { ...newSnake[0] };

            switch (direction) {
                case 'UP': head.y -= 1; break;
                case 'DOWN': head.y += 1; break;
                case 'LEFT': head.x -= 1; break;
                case 'RIGHT': head.x += 1; break;
                default: break;
            }

            // Collision detection
            if (head.x < 0 || head.x >= GRID_SIZE || 
                head.y < 0 || head.y >= GRID_SIZE ||
                newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
                setGameOver(true);
                setIsRunning(false);
                return prevSnake;
            }

            newSnake.unshift(head);

            // Food collision
            if (head.x === food.x && head.y === food.y) {
                setScore((prev) => prev + 10);
                generateFood();
            } else {
                newSnake.pop();
            }

            return newSnake;
        });
    }, [direction, food.x, food.y, isRunning, gameOver]);

    // Keyboard controls
    useEffect(() => {
        const handleKeyPress = (e) => {
            switch (e.key) {
                case 'ArrowUp': if (direction !== 'DOWN') setDirection('UP'); break;
                case 'ArrowDown': if (direction !== 'UP') setDirection('DOWN'); break;
                case 'ArrowLeft': if (direction !== 'RIGHT') setDirection('LEFT'); break;
                case 'ArrowRight': if (direction !== 'LEFT') setDirection('RIGHT'); break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [direction]);

    // Game interval
    useEffect(() => {
        const gameInterval = setInterval(moveSnake, 150);
        return () => clearInterval(gameInterval);
    }, [moveSnake]);

    // Initial setup
    useEffect(() => generateFood(), []);

    // Reset game
    const resetGame = () => {
        setSnake([{ x: 10, y: 10 }]);
        setDirection('RIGHT');
        setGameOver(false);
        setScore(0);
        setIsRunning(false);
        generateFood();
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#1a1a1a',
            padding: '10px',
            maxWidth: '600px',
            margin: '0 auto',
            boxSizing: 'border-box',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}>
            <h1 style={{ 
                color: '#4CAF50', 
                marginBottom: '20px',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'
            }}>
                Snake Game
            </h1>
            
            <div style={{ 
                color: 'white', 
                fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
                marginBottom: '20px' 
            }}>
                Score: {score}
            </div>

            {/* Game Board */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(15px, 4vw))`,
                gap: '1px',
                backgroundColor: '#333',
                padding: '2px',
                borderRadius: '5px',
                width: '100%',
                aspectRatio: '1 / 1'
            }}>
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                    const x = index % GRID_SIZE;
                    const y = Math.floor(index / GRID_SIZE);
                    const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
                    const isFood = food.x === x && food.y === y;
                    const isHead = snake[0].x === x && snake[0].y === y;

                    return (
                        <div
                            key={index}
                            style={{
                                position: 'relative',
                                width: '100%',
                                paddingBottom: '100%',
                                backgroundColor: isSnake
                                    ? isHead ? '#4CAF50' : '#2E7D32'
                                    : '#212121',
                                borderRadius: '2px',
                            }}
                        >
                            {isFood && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'clamp(12px, 3vw, 20px)',
                                        lineHeight: 1,
                                        cursor: 'pointer'
                                    }}
                                    onClick={handleFoodClick}
                                >
                                    🍎
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Game Over Overlay */}
            {gameOver && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: 'white',
                    width: '85%',
                    maxWidth: '400px'
                }}>
                    <h2 style={{ margin: '0 0 10px' }}>Game Over!</h2>
                    <p style={{ margin: '0 0 20px' }}>Final Score: {score}</p>
                    <button
                        onClick={resetGame}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            width: '100%'
                        }}
                    >
                        Play Again
                    </button>
                </div>
            )}

            {/* Control Buttons */}
            <div style={{ 
                display: 'flex', 
                gap: 'clamp(10px, 3vw, 20px)', 
                marginTop: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <button
                    onClick={() => setIsRunning(!isRunning)}
                    style={{
                        padding: 'clamp(8px, 2vw, 12px) clamp(15px, 4vw, 20px)',
                        fontSize: 'clamp(14px, 3vw, 16px)',
                        backgroundColor: isRunning ? '#FF4081' : '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        minWidth: '100px'
                    }}
                >
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button
                    onClick={resetGame}
                    style={{
                        padding: 'clamp(8px, 2vw, 12px) clamp(15px, 4vw, 20px)',
                        fontSize: 'clamp(14px, 3vw, 16px)',
                        backgroundColor: '#FFC107',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        minWidth: '100px'
                    }}
                >
                    Reset
                </button>
            </div>

            <div style={{ 
                color: '#666', 
                marginTop: '20px',
                fontSize: 'clamp(12px, 3vw, 16px)',
                textAlign: 'center'
            }}>
                Use arrow keys to control the snake
            </div>
        </div>
    );
};

export default Playground;
