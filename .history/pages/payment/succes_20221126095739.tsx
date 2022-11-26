import { Layout } from "components/layout";
import SuccessPage from "/payment/success-page";
import type { NextPage } from "next";
import Head from "next/head";

const PaymentSuccess: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pago éxitoso</title>
      </Head>
      <Layout form={false} sticky={false}>
        <SuccessPage />
      </Layout>
    </>
  );
};

export default PaymentSuccess;