import { Layout } from "src/components/layout";
import FailurePage from "src/components/payment/failure-page";
import type { NextPage } from "next";
import Head from "next/head";

const PaymentFailure: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pago fallido - compralo</title>
      </Head>
      <Layout form={false} sticky={false}>
        <FailurePage />
      </Layout>
    </>
  );
};

export default PaymentFailure;