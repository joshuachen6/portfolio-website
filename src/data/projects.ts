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
    id: 'roboop-core',
    title: 'RoboOp Core',
    description: 'High-performance C++20 systems library for motion control and pathing. Implements quintic splines and optimized trajectory generation.',
    tags: ['C++20', 'Eigen', 'Systems Design'],
    githubUrl: 'https://github.com/joshuachen6/RoboOpSuite',
    category: 'Systems',
  },
  {
    id: 'chess-cpp',
    title: 'Chess Engine',
    description: 'A custom chess engine built with bitboard representations and a minimax search algorithm. Features Alpha-Beta pruning for high-depth search.',
    tags: ['C++', 'Bitboards', 'Minimax', 'Search'],
    githubUrl: 'https://github.com/joshuachen6/ChessCpp',
    category: 'Algorithms',
  },
  {
    id: 'roboop-visualizer',
    title: 'RoboOp Visualizer',
    description: 'A desktop application for real-time trajectory inspection. Built with GLFW/ImGui to provide a low-latency, hardware-accelerated interface.',
    tags: ['C++', 'OpenGL', 'ImGui', 'Visualization'],
    githubUrl: 'https://github.com/joshuachen6/RoboOpSuite',
    category: 'Graphics',
  },
  {
    id: 'robotics-gui-generator',
    title: 'Trajectory Generator',
    description: 'Interactive tool for generating Road Runner Java code. Features a virtual driving mode to map paths with immediate code export.',
    tags: ['Python', 'Pyglet', 'Code Generation'],
    githubUrl: 'https://github.com/joshuachen6/roboticsGUI',
    category: 'Tools',
  },
  {
    id: 'qlearning-rl',
    title: 'Reinforcement Learning',
    description: 'Implementation of Q-Learning agents using libtorch. Explores model-based decision making and optimal search rollouts.',
    tags: ['C++', 'PyTorch', 'ML', 'Q-Learning'],
    githubUrl: 'https://github.com/joshuachen6/QLearning-Rollouts-TicTacToe',
    category: 'AI',
  },
  {
    id: 'search-sims',
    title: 'Heuristic Search Sims',
    description: 'A collection of simulations testing various heuristic search algorithms across different state-space environments.',
    tags: ['C++', 'Algorithms', 'Heuristics'],
    githubUrl: 'https://github.com/joshuachen6/ChessCpp',
    category: 'Algorithms',
  },
];
