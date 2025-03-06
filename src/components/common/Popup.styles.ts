import styled from 'styled-components';

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

export const CloseButtonWrapper = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 250px;
  border: 1px solid #ddd;
`;

export const OptionButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.1s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const UploadButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  background: #28a745;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #218838;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const PreviewImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 6px;
  margin-top: 10px;
  border: 1px solid #ccc;
`;
