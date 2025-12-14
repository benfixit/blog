import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa6';
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
        <button onClick={copyToClipboard}>
          {isCopied ? <FaCheck className={styles.check} /> : <FaCopy className={styles.copy} />}
        </button>
    </div>
  );
};

export default CopyTextComponent;
