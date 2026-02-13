import styled from 'styled-components';

const Loader = () => {
  return (
    <div className='fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col items-center justify-center'>
      <StyledWrapper>
        <div className='loader'>
          <svg height={0} width={0} className='absolute'>
            <defs>
              <linearGradient
                id='gold-gradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='100%'
              >
                <stop offset='0%' stopColor='#BF953F' />
                <stop offset='25%' stopColor='#FCF6BA' />
                <stop offset='50%' stopColor='#B38728' />
                <stop offset='75%' stopColor='#FBF5B7' />
                <stop offset='100%' stopColor='#AA771C' />
              </linearGradient>
              <filter id='glow'>
                <feGaussianBlur stdDeviation='2' result='coloredBlur' />
                <feMerge>
                  <feMergeNode in='coloredBlur' />
                  <feMergeNode in='SourceGraphic' />
                </feMerge>
              </filter>
            </defs>
          </svg>

          <div className='aura-text-loader'>
            {/* Letra A */}
            <svg
              viewBox='0 0 64 64'
              height={80}
              width={80}
              className='inline-block'
            >
              <path
                className='dash'
                stroke='url(#gold-gradient)'
                strokeWidth={4}
                fill='none'
                strokeLinecap='round'
                pathLength={360}
                d='M32 10 L12 54 M32 10 L52 54 M20 40 L44 40'
              />
            </svg>

            {/* Letra U */}
            <svg
              viewBox='0 0 64 64'
              height={80}
              width={80}
              className='inline-block'
            >
              <path
                className='dash'
                stroke='url(#gold-gradient)'
                strokeWidth={4}
                fill='none'
                strokeLinecap='round'
                pathLength={360}
                d='M15 15 V40 C15 50 49 50 49 40 V15'
              />
            </svg>

            {/* Letra R */}
            <svg
              viewBox='0 0 64 64'
              height={80}
              width={80}
              className='inline-block'
            >
              <path
                className='dash'
                stroke='url(#gold-gradient)'
                strokeWidth={4}
                fill='none'
                strokeLinecap='round'
                pathLength={360}
                d='M15 54 V10 H35 C45 10 45 30 35 30 H15 M32 30 L50 54'
              />
            </svg>

            {/* Letra A */}
            <svg
              viewBox='0 0 64 64'
              height={80}
              width={80}
              className='inline-block'
            >
              <path
                className='dash'
                stroke='url(#gold-gradient)'
                strokeWidth={4}
                fill='none'
                strokeLinecap='round'
                pathLength={360}
                d='M32 10 L12 54 M32 10 L52 54 M20 40 L44 40'
              />
            </svg>
          </div>
        </div>
      </StyledWrapper>

      <p className='mt-8 text-[#BF953F]/40 tracking-[0.8em] text-[10px] font-light uppercase'>
        Iniciando Aura Capital
      </p>
    </div>
  );
};

const StyledWrapper = styled.div`
  .absolute {
    position: absolute;
  }
  .inline-block {
    display: inline-block;
    margin: 0 8px;
  }

  .aura-text-loader {
    display: flex;
    align-items: center;
    filter: drop-shadow(0 0 8px rgba(191, 149, 63, 0.3));
  }

  .dash {
    stroke-dasharray: 360;
    stroke-dashoffset: 360;
    animation: auraDraw 3.5s ease-in-out infinite;
  }

  @keyframes auraDraw {
    0% {
      stroke-dashoffset: 360;
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    50% {
      stroke-dashoffset: 0;
    }
    85% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: -360;
      opacity: 0;
    }
  }
`;

export default Loader;
