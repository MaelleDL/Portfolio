export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration:0.7,
        },
    },
};

export const frontFlip = {
    hidden: {
        rotateY: 0,
        opacity: 1,
    },
    show: {
        rotateY: -180,
        opacity: 0,
        transition: {
            duration: 1.2
        },
    },
};

export const backFlip = {
    hidden: {
        rotateY: 180,
        opacity: 0,
    },
    show: {
        rotateY: 0,
        opacity: 1,
        transition: {
            duration: 1.2
        },
    },
};