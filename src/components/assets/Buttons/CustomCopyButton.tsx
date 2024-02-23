import { CopyButton, ActionIcon, Tooltip, rem } from '@mantine/core'
import { FaCheck } from 'react-icons/fa';
import { IoCopy } from "react-icons/io5";

export default function CustomCopyButton({ value }: { value:string }) {
  return (
    <CopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'black'} variant="subtle" onClick={copy} className=''>
            {!copied ? (
              <IoCopy className='text-white text-xl' />
            ) : (
                <FaCheck className='text-cyan-500 text-lg' />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}