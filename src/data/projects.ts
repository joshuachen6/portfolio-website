export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  category: 'Robotics' | 'C++' | 'AI' | 'Tools';
}

export const projects: Project[] = [
  {
    id: 'roboop-suite',
    title: 'RoboOpSuite',
    description: 'A comprehensive robotics toolkit for path planning, control, and visualization. Includes quintic splines, motion profiling, and a real-time visualizer.',
    tags: ['C++20', 'xmake', 'ImGui', 'Eigen'],
    githubUrl: 'https://github.com/joshuachen6/RoboOpSuite',
    category: 'Robotics',
  },
  {
    id: 'robotics-gui',
    title: 'RoboticsGUI',
    description: 'Interactive graphical tool for generating Road Runner trajectory code for FTC robots. Features real-time path visualization and automatic code generation.',
    tags: ['Python', 'pyglet', 'FTC', 'Road Runner'],
    githubUrl: 'https://github.com/joshuachen6/roboticsGUI',
    category: 'Tools',
  },
  {
    id: 'chess-cpp',
    title: 'ChessCpp',
    description: 'A chess engine written in C++ using SFML and ImGui. Features bitboard-based representation and minimax search with Alpha-Beta pruning.',
    tags: ['C++', 'SFML', 'ImGui', 'Minimax'],
    githubUrl: 'https://github.com/joshuachen6/ChessCpp',
    category: 'C++',
  },
  {
    id: 'qlearning-tictactoe',
    title: 'QLearning TicTacToe',
    description: 'An experimental project exploring libtorch and reinforcement learning (Q-Learning) for TicTacToe.',
    tags: ['C++', 'libtorch', 'AI', 'Reinforcement Learning'],
    githubUrl: 'https://github.com/joshuachen6/QLearning-Rollouts-TicTacToe',
    category: 'AI',
  },
];
