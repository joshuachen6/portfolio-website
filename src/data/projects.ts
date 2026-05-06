export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  category: 'Systems' | 'Algorithms' | 'AI' | 'Tools' | 'Graphics' | 'Vision';
}

export const projects: Project[] = [
  {
    id: 'roboop-suite',
    title: 'RoboOp Suite',
    description: 'A comprehensive C++20 robotics ecosystem. Combines high-performance motion control libraries with a hardware-accelerated visualizer for real-time trajectory design.',
    tags: ['C++20', 'Systems', 'Control', 'OpenGL'],
    githubUrl: 'https://github.com/joshuachen6/RoboOpSuite',
    category: 'Systems',
  },
  {
    id: 'chess-engine',
    title: 'Chess Engine',
    description: 'Advanced chess engine utilizing bitboard representations and optimized minimax search. Features deep-search heuristics and a custom SFML analysis interface.',
    tags: ['C++', 'Algorithms', 'Bitboards', 'Search'],
    githubUrl: 'https://github.com/joshuachen6/ChessCpp',
    category: 'Algorithms',
  },
  {
    id: 'vision-system',
    title: 'Autonomous Vision',
    description: 'Computer vision pipeline for object detection and tracking in dynamic environments. Leverages OpenCV for high-speed image processing and spatial awareness.',
    tags: ['Python', 'OpenCV', 'Computer Vision', 'AI'],
    githubUrl: 'https://github.com/joshuachen6',
    category: 'Vision',
  },
  {
    id: 'raycasting-engine',
    title: 'Raycasting Engine',
    description: 'Custom 3D rendering engine implementing DDA algorithms for real-time perspective projection. Optimizes software-based texture mapping and depth buffering.',
    tags: ['C++', 'Graphics', 'Mathematics', 'Rendering'],
    githubUrl: 'https://github.com/joshuachen6',
    category: 'Graphics',
  },
  {
    id: 'trajectory-generator',
    title: 'Trajectory Generator',
    description: 'Interactive Python tool for FTC robotics. Allows for visual path mapping through a virtual robot interface with automated Road Runner code generation.',
    tags: ['Python', 'Pyglet', 'FTC', 'Automation'],
    githubUrl: 'https://github.com/joshuachen6/roboticsGUI',
    category: 'Tools',
  },
  {
    id: 'qlearning-rl',
    title: 'Reinforcement Learning',
    description: 'Research project exploring Q-Learning agents with libtorch. Focuses on developing intelligent agents capable of optimal decision making via search rollouts.',
    tags: ['C++', 'libtorch', 'ML', 'AI'],
    githubUrl: 'https://github.com/joshuachen6/QLearning-Rollouts-TicTacToe',
    category: 'AI',
  },
];
