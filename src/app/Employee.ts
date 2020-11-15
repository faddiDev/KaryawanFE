export interface EmployeeJoin {
    id: number;
    name: string;
    birthDate: string;
    positionId: {
      id: number,
      code: string,
      name: string,
      isDelete: number
    };
    idNumber: number;
    gender: number;
    isDelete: number;
  }