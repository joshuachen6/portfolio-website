export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  category: 'Systems' | 'Algorithms' | 'AI' | 'Tools' | 'Graphics';
}

export const projects: Project[] = [
  {
    id: 'roboop-suite',
    title: 'RoboOp Suite',
    description: 'A complete C++20 robotics ecosystem. Combines a high-performance control library (quintic splines, PID) with a hardware-accelerated visualizer for real-time trajectory design.',
    tags: ['C++20', 'Eigen', 'OpenGL', 'Systems'],
    githubUrl: 'https://github.com/joshuachen6/RoboOpSuite',
    category: 'Systems',
  },
  {
    id: 'chess-engine',
    title: 'Chess Engine',
    description: 'High-performance chess engine utilizing bitboard representations and minimax search with Alpha-Beta pruning. Includes a custom SFML-based UI for real-time analysis.',
    tags: ['C++', 'Bitboards', 'Algorithms', 'Search'],
    githubUrl: 'https://github.com/joshuachen6/ChessCpp',
    category: 'Algorithms',
  },
  {
    id: 'raycasting-engine',
    title: 'Raycasting Engine',
    description: 'A custom software-based renderer implementing DDA (Digital Differential Analysis) for real-time 3D environments. Focuses on performance and perspective-correct texture mapping.',
    tags: ['C++', 'Graphics', 'Rendering', 'Mathematics'],
    githubUrl: 'https://github.com/joshuachen6',
    category: 'Graphics',
  },
  {
    id: 'trajectory-generator',
    title: 'Trajectory Generator',
    description: 'Interactive Python tool for FTC robotics. Allows developers to map complex paths through a virtual driving interface and export optimized Java/Road Runner code.',
    tags: ['Python', 'Pyglet', 'Automation', 'FTC'],
    githubUrl: 'https://github.com/joshuachen6/roboticsGUI',
    category: 'Tools',
  },
  {
    id: 'qlearning-rl',
    title: 'Reinforcement Learning',
    description: 'Research into autonomous decision-making using libtorch and Q-Learning. Trains agents to optimize search rollouts in dynamic game environments.',
    tags: ['C++', 'PyTorch', 'ML', 'AI'],
    githubUrl: 'https://github.com/joshuachen6/QLearning-Rollouts-TicTacToe',
    category: 'AI',
  },
];
