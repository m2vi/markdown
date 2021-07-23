import { NextApiRequest, NextApiResponse } from 'next';
import pdf from 'html-pdf';

const toPdf = (_: NextApiRequest, res: NextApiResponse) => {
  const { html } = _.query;

  pdf.create(html.toString()).toStream((err, stream) => {
    if (err) res.status(400).json({ success: false, error: err });

    stream.pipe(res);
  });
};

export default toPdf;
