import { Layout } from "components/layout";
import PendingPage from "components/payment/pending-page";
import type { NextPage } from "next";
import Head from "next/head";

const PaymentPending: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pago pendiente</title>
      </Head>
      <Layout form={false} sticky={false}>
        <PendingPage />
      </Layout>
    </>
  );
};

export default PaymentPending;