
enum Images {
    PNG,
    JPG,
    GIF,
    TIF
};

const imageType = Images.JPG;
console.log(`Image type index: ${imageType}`);

const  pngImage = Images[0];
console.log(`Image type by index: ${pngImage}`);


enum StatusType {
    IN_PROCESS = 'in process',
    RECEIVED = 'received',
    PROCESSED = 'processed',
    REJECTED = 'rejected'
};

const currentStatus = StatusType.IN_PROCESS;
console.log(`Meaningful image type with the value: ${currentStatus}`);