// Intersection Type
type AdminType = {
    name: string;
    priviledge: string[];
};

type EmployeeType = {
    name: string;
    startDate: string;
};

type ElevatedEmployeeType = AdminType & EmployeeType;

const emp1: ElevatedEmployeeType = {
    name: "Ajay",
    startDate: "22-08-2010",
    priviledge: ["ServerAdmin"]
};


// Union Type
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Union of above two will be taken which is numeric type. So universal will support only number

// let testVariable: Universal = ""; // Will throw compilation error