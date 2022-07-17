import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_CONNECTION_ACCESS_KEY,
    secretAccessKey: process.env.AWS_CONNECTION_SECRET_KEY,
    params: { Bucket: process.env.AWS_BUCKET_NAME },
});

const uploadImage = async (Key, Body, ContentType) => {
    return await s3
        .upload({
            Key,
            Body,
            ContentEncoding: "base64",
            ContentType,
        })
        .promise();
};

const deleteImage = async Key => {
    await s3.deleteObject({ Key }).promise();
};

export { uploadImage, deleteImage };
