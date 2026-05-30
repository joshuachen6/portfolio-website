export interface Course {
  code: string;
  title: string;
  inProgress?: boolean;
}

export interface CourseGroup {
  label: string;
  courses: Course[];
}

export const courseGroups: CourseGroup[] = [
  {
    label: 'COMPUTER_SCIENCE',
    courses: [
      { code: 'CS 225', title: 'Data Structures & Algorithms' },
      { code: 'CS 340', title: 'Introduction to Computer Systems' },
      { code: 'CS 374', title: 'Algorithms & Models of Computation' },
      { code: 'CS 415', title: 'Game Development' },
      { code: 'CS 411', title: 'Database Systems' },
      { code: 'CS 427', title: 'Software Engineering I' },
    ],
  },
  {
    label: 'MATH_+_ENGINEERING',
    courses: [
      { code: 'MATH 257', title: 'Linear Algebra w/ Computation' },
      { code: 'MATH 285', title: 'Differential Equations' },
      { code: 'CS 357', title: 'Numerical Methods I' },
      { code: 'BIOE 205', title: 'Signal Processing in BIOE' },
    ],
  },
];
