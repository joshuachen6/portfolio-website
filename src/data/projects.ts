export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  category: 'Robotics' | 'C++' | 'AI' | 'Tools' | 'Graphics';
}

export const projects: Project[] = [
  {
    id: 'roboop-core',
    title: 'RoboOp Core',
    description: 'High-performance C++20 robotics library featuring quintic Hermite splines, optimized motion profiling, and robust PID control systems.',
    tags: ['C++20', 'Eigen', 'Control Theory', 'Splines'],
    githubUrl: 'https://github.com/joshuachen6/RoboOpSuite',
    category: 'Robotics',
  },
  {
    id: 'roboop-visualizer',
    title: 'RoboOp Visualizer',
    description: 'Interactive GUI tool for real-time path design and trajectory inspection. Built with GLFW and ImGui for low-latency feedback.',
    tags: ['C++', 'ImGui', 'GLFW', 'Visualization'],
    githubUrl: 'https://github.com/joshuachen6/RoboOpSuite',
    category: 'Tools',
  },
  {
    id: 'robotics-gui',
    title: 'RoboticsGUI',
    description: 'FTC trajectory generator that simplifies Road Runner code creation. Allows "driving" virtual robots to map paths visually.',
    tags: ['Python', 'Pyglet', 'FTC', 'Road Runner'],
    githubUrl: 'https://github.com/joshuachen6/roboticsGUI',
    category: 'Tools',
  },
  {
    id: 'chess-cpp',
    title: 'ChessCpp',
    description: 'Bitboard-based chess engine featuring Minimax search with Alpha-Beta pruning and a custom SFML/ImGui interface.',
    tags: ['C++', 'SFML', 'Algorithms', 'Game Engine'],
    githubUrl: 'https://github.com/joshuachen6/ChessCpp',
    category: 'C++',
  },
  {
    id: 'qlearning-tictactoe',
    title: 'QLearning AI',
    description: 'Exploration into reinforcement learning using libtorch to train agents for optimal decision making in game environments.',
    tags: ['C++', 'libtorch', 'AI', 'Q-Learning'],
    githubUrl: 'https://github.com/joshuachen6/QLearning-Rollouts-TicTacToe',
    category: 'AI',
  },
];
