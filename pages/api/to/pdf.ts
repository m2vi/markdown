import { NextApiRequest, NextApiResponse } from 'next';
import pdf from 'html-pdf';

const toPdf = (_: NextApiRequest, res: NextApiResponse) => {
  const { html } = _.query;
};

export default toPdf;
