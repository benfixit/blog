import { useState } from 'react';
import { FaCopy, FaCircleCheck } from 'react-icons/fa6';
import styles from '@/app/ui/copycodesample.module.css';

const CopyTextComponent = ({ textToCopy } : { textToCopy: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);

      // Reset the "Copied!" state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={styles.wrapper}>
        {isCopied ? <FaCircleCheck className={styles.check} /> : <FaCopy onClick={copyToClipboard} className={styles.copy} />}
    </div>
  );
};

export default CopyTextComponent;
