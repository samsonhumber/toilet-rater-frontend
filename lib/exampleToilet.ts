type ReviewObject = {
    id: 0
    user: string;
    toilet: string;
    gridRef: string;
    stars: {
        overall: number;
        experience: number;
        decor: number;
        cleanliness: number;
    };
    comment: string
};

export const exampleToiletData: ReviewObject[] = [{
    id: 0,
    user: 'samsonhumber',
    toilet: 'Yelverton Public Toilet',
    gridRef: 'ZX312678',
    stars: {
        overall: 2,
        experience: 3,
        decor: 1.5,
        cleanliness: 1.5
    },
    comment: "It's okay I guess. The walls were plain and a bit dirty, but at least everything is working correctly"
}];