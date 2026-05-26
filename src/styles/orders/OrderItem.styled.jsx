import styled from "styled-components";

export const OrderItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ececefe2;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:nth-child(even) {
    background-color: #fafafa;
  }

  &:hover {
    background-color: #f1f5f9; 
    cursor: pointer;
  }

  span {
    flex: 1;
    font-size: 0.9rem;
    color: #334155; 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 

    &:first-child {
      flex: 0.5;
      font-weight: 600;
      color: #0f172a; 
    }

    &:nth-child(2) {
      color: #64748b;
    }

    &:nth-child(3) {
      font-weight: 500;
    }

    &:last-child {
      text-align: right;
      font-weight: 600;
      color: rgb(7, 207, 238); 
    }
  }
`;
