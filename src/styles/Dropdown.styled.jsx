import styled from "styled-components";

export const DropdownStyled = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(3rem);
  background: rgb(248, 251, 255);
  border-radius: 0.5rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.15);
  padding: 1rem;
  z-index: 2;
  max-height: 500px;
  overflow-y: auto;

  &:hover {
    background: #eaf2ff;
  }

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

  .dropdown-container::-webkit-scrollbar-thumb {
    background: #05c1b5;
    border-radius: 0.5rem;
  }

  .cart-total span:nth-child(2),
  .total-container,
  .head {
    font-weight: bold;
  }

  .cart-total,
  .head {
    background: #64f3f5;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }

  .intro,
  .head,
  .cart-total {
    border-bottom: 1px solid #cccccc86;
  }

  .dropdown-container {
    border-bottom: 1px solid #cccccc86;

    .img-container {
      width: 4rem;
      height: 100%;
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
