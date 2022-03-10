import Theme from "../styles/theme"
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <motion.div initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
      opacity: 0
      },
      pageAnimate: {
      opacity: 1
     },
    }}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
      </motion.div>   
    </>
  ) 
}

export default MyApp
