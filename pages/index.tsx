import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { BlankInput } from '../components/Input';
import Editor from '../components/Editor';
import moment from 'moment';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className='mt-100 max-w-wide mx-auto '>
        <div className='w-full flex flex-col'>
          <span className='flex justify-between items-center w-full pb-5'>
            <BlankInput placeholder={t('common.fileName')} />
            <p className='text-primary-300'>{moment().fromNow()}</p>
          </span>

          <Editor />
        </div>
      </main>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
