import "../styles/globals.css";
import { StateProvider } from "../context/StateProvider";
import reducer, { initialState } from "../context/reducer";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Layout>
        <motion.div
          style={{ overflow: "hidden" }}
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.1,
              },
            },
            exit: {
              transition: {
                ease: "easeInOut",
              },
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
