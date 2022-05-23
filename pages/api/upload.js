import FormData from 'form-data';
import multiparty from 'multiparty';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new multiparty.Form();

    await form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.files = files;
      console.log(fields);
      console.log(files);
    });

    const CLOUD = process.env.CLOUDINARY_CLOUD;
    const PRESET = process.env.CLOUDINARY_PRESET;

    const url = `https://api.cloudinary.com/v1_1/${CLOUD}/upload`;
    console.log('image', req.file);
    const image = req.body['file'];

    const fileData = new FormData();
    fileData.append('file', image);
    fileData.append('upload_preset', PRESET);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: fileData,
    });

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: 'wrong method' });
  }
}
