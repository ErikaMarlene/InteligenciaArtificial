import { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // const pythonScript = '../../../JSONyServidor/predict.py';

    const pythonScript = '/Users/erikagarciasanchez/Documents/Profesional TEC/7Semestre/InteligenciaArtificial/JSONyServidor/predict.py';
    const inputData = 'input data';

    const pythonProcess = spawn('python', [pythonScript, inputData]);

    pythonProcess.stdout.on('data', (data) => {
      const output = data.toString();
      res.status(200).json({ output });
    });

    pythonProcess.on('error', (error) => {
      console.error('Error running Python script:', error);
      res.status(500).json({ error: 'Error running Python script' });
    });

    pythonProcess.on('exit', (code) => {
      if (code === 0) {
        console.log('Python script executed successfully.');
      } else {
        console.error('Python script exited with an error code:', code);
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
