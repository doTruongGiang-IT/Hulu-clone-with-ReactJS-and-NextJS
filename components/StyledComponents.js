import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: -20px 0 50px;
`;

export const Title = styled.h2`
  color: ${({color}) => color ? color : '#06202A'};
  font-size: 50px;
  font-weight: bold;
  margin: 0 0 20px;
`;

export const Para = styled.p`
  color: ${({color}) => color ? color : '#06202A'};
  line-height: 20px;
  letter-spacing: 0.5px;
  margin-bottom: 30px;
`;

export const SocialIcon = styled.a`
  color: white;
  text-decoration: none;
  margin: 15px 0;
  border: 1px solid #06202A;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
  background-color: #06202A;
  transition: transform 0.3s ease;
  :hover {
    transform: scale(0.9);
  }
`;

export const Container = styled.div`
  background-color: white;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SocialContainer = styled.div`
  margin: 20px 0;
  display: ${({size}) => size === 414 ? 'none' : 'block'};
`;

export const Input = styled.input`
  background: #F2F7F5;
  border: ${({errors}) => errors ? '1px solid red' : 'none'};
  outline: none;
  border-radius: 20px;
  padding: 12px 15px;
  margin: 8px 0;
  width: ${({size}) => size === 414 ? '100%' : '50%'};
  color: #06202A;

`;

export const Error = styled.span`
  color: red;
`;

export const Button = styled.button`
  color: ${({ghost}) => ghost ? '#34A89A' : 'white'};
  border-radius: 30px;
  background-color: ${({ghost}) => ghost ? 'white' : '#34A89A'};
  border: 1px solid ${({ghost}) => ghost ? '#34A89A' : 'none'};
  outline: none;
  font-weight: bold;
  padding: 12px 45px;
  text-transform: uppercase;
  transition: transform 150ms ease-in;
  :active {
    transform: scale(0.95);
  } 
  :hover {
    box-shadow: 5px 10px 18px #888888;
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  ${({signInContainer}) => signInContainer ? 'left: 0' : ""};
  ${({signInContainer}) => signInContainer ? 'width: 70%' : ""};
  z-index: ${({signInContainer}) => signInContainer ? 2 : 1};
  height: 100%;
  transition: all 0.6s ease-in-out;
  ${({signUpContainer}) => signUpContainer ? 'opacity: 0' : ''};
  transform: ${({toggle, size}) => toggle ? `${size === 768 ? 'translateX(27%)' : `${size === 414 ? 'translateX(15%)' : 'translateX(120%)'}`}` : 'translateX(0)'};
  opacity: ${({toggle}) => toggle ? '1' : ''};
  ${({toggle, signUpContainer}) => (toggle && signUpContainer) ? 'z-index: 5' : ''};
  ${({toggle, signInContainer}) => (toggle && signInContainer) ? 'opacity: 0' : ''};
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 70%;
  z-index: 100;
  width: 30%;
  height: 100%;
  overflow: hidden;
  transform: ${({toggle}) => toggle ? 'translateX(-234%)' : 'translateX(0)'};
  transition: transform 0.6s ease-in-out;
`;

export const Overlay = styled.div`
  background-color: #34A89A;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: ${({toggle}) => toggle ? 'translateX(50%)' : 'translateX(0)'};
  transition: transform 0.6s ease-in-out;
`;

export const OverlayPanel = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  ${({overlayRight}) => overlayRight ? 'right: 0' : ''};
  transform: translateX(0);
  text-align: center;
  transition: transform 0.6s ease-in-out;
`;

