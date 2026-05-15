import styled from "styled-components";

export const DropdownStyled = styled.section`
  position: absolute;
  top: clamp(1rem, 0.12rem + 3.756vw, 3.5rem);
  right: 0;
  transform: translateY(3rem);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.95),
    rgba(240, 253, 244, 0.9)
  );
  backdrop-filter: blur(6px);
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.5rem;
  z-index: 2;
  height: calc(100vh - clamp(1.5rem, 0.12rem + 3.756vw, 3.5rem) - 3.5rem);
  overflow-y: auto;

  .head,
  .intro,
  .dropdown-container,
  .cart-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
  }

  .dropdown-container {
    max-height: 100vh;
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  .dropdown-container::-webkit-scrollbar {
    width: 0.5rem;
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  .cart-total,
  .total-container,
  .head {
    font-weight: bold;
  }

  .cart-total,
  .head {
     background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 0.5rem;
    color: white;
  }

  .dropdown-container {
    .img-container {
      width: 4rem;
      height: 100%;
      border-radius: 0.5rem;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .product-details {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .total-container {
      flex-basis: 4rem;
    }
  }
`;
