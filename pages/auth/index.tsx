import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/index';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { Body, Title, Para, SocialIcon, Container, Form, 
        SocialContainer, Button, FormContainer, OverlayContainer, 
        Overlay, OverlayPanel, Input, Error } from '../../components/StyledComponents';
import { SignInFormat, SignUpFormat, User } from '../../utils/models';

let utf8_encode = (token: string) => {
  token = token.replace(/rn/g,"n");
  let t = "";
  for(let n = 0 ; n < token.length ; n++) {
    let r = token.charCodeAt(n);
    if(r < 128) {
      t += String.fromCharCode(r);
    }else if(r > 127 && r < 2048) {
      t += String.fromCharCode(r >> 6 | 192);
      t += String.fromCharCode(r & 63 | 128);
    }else {
      t += String.fromCharCode(r >> 12 | 224);
      t += String.fromCharCode(r >> 6 & 63 | 128);
      t += String.fromCharCode(r & 63 | 128);
    };
  };
    return t;
};

let createSessionID = (token: string, _keyStr: string) => {
  let t = "";
  let n,r,i,s,o,u,a;
  let f = 0;
  token = utf8_encode(token);
  while(f < token.length) {
    n = token.charCodeAt(f++);
    r = token.charCodeAt(f++);
    i = token.charCodeAt(f++);
    s = n >> 2;
    o = (n & 3) << 4 | r >>4;
    u = (r & 15) << 2 | i >> 6;
    a = i & 63;
    if(isNaN(r)) {
      u = a = 64;
    }else if(isNaN(i)) {
      a = 64;
    };
    t = t + _keyStr.charAt(s) + _keyStr.charAt(o) + _keyStr.charAt(u) + _keyStr.charAt(a);
  }
  return t;
};

function Login({store}) {
    type RootState = ReturnType<typeof store.getState>;
    async function onSubmit(data, type) {
      const users: Array<User> = JSON.parse(localStorage.getItem("users"));
      setSubmitting(true);
      setServerErrors([]);
      data.type = type.nativeEvent.submitter.innerHTML;
      const response = await fetch('../api/auth', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
          users
        })
      });
      const serRes = await response.json();
      if(serRes.errors) {
        setServerErrors(serRes.errors);
      }else if(serRes.message === "Success") {
        dispatch(actions.getTokenRequest());
        let _keyStr: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let token: string = JSON.parse(localStorage.getItem("token"));
        if(token !== null) {
          data.token = token;
          if(data.type === "Sign up") {
            data.favorite = [];
            users.push(data);
          }else {
            let index = users.findIndex(user => {
              return user.email === data.email && user.password === data.password;
            });
            if(index !== -1) {
              users[index].token = data.token;
            };
          };
          localStorage.setItem("users", JSON.stringify(users));
          let sessionID = createSessionID(token, _keyStr);
          localStorage.setItem("sessionID", JSON.stringify(sessionID));
          localStorage.setItem("login", JSON.stringify(data));
          router.push("/");
        }else {
          if(typeof window !== "undefined") {
            localStorage.setItem("token", JSON.stringify("6bc047b88f669d1fb86574f06381005d93d3517a"));
          };
          let token: string = JSON.parse(localStorage.getItem("token"));
          data.token = token;
          if(data.type === "Sign up") {
            data.favorite = [];
            users.push(data);
          }else {
            let index = users.findIndex(user => {
              return user.email === data.email && user.password === data.password;
            });
            if(index !== -1) {
              users[index].token = data.token;
            };
          };
          localStorage.setItem("users", JSON.stringify(users));
          let sessionID = createSessionID(token, _keyStr);
          localStorage.setItem("sessionID", JSON.stringify(sessionID));
          localStorage.setItem("login", JSON.stringify(data));
          router.push("/");
        };
      };
      resetSignIn();
      resetSignUp();
      setSubmitting(false);
    };

    let dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(0);
    const auth = useSelector<RootState, string>(state => state.authReducer);
    const { register: registerSignIn, handleSubmit: handleSubmitSignIn, formState: { errors: errorsSignIn }, reset: resetSignIn } = useForm<SignInFormat>();
    const { register: registerSignUp, handleSubmit: handleSubmitSignUp, formState: { errors: errorsSignUp }, reset: resetSignUp } = useForm<SignUpFormat>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);
    const router = useRouter();

    useEffect(() => {
      let setSize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', setSize);
    }, []);
//414 - 768
    console.log(width);
    return (
      <Body>
        <Head>
          <title>Hulu - Auth</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <FormContainer toggle={toggle} signUpContainer={true} size={width}>
            <Form onSubmit={handleSubmitSignUp(onSubmit)}>
              <Title>Create Free Account</Title>
              <p className="text-[#06202A] opacity-0 sm:opacity-100">Login using social networks</p>
              <SocialContainer size={width}>
                <SocialIcon href="#">f</SocialIcon>
                <SocialIcon href="#">G+</SocialIcon>
                <SocialIcon href="#">in</SocialIcon>
              </SocialContainer>
              {serverErrors ? <Error>{serverErrors}</Error> : null}
              <Input 
                {...registerSignUp('firstName',{
                  required: "Please fill in Email field"
                })} 
                type="text" 
                placeholder="First Name" 
                name="firstName" 
                errors={errorsSignUp.firstName}
              />
              {errorsSignUp.firstName ? <Error>{errorsSignUp.firstName.message}</Error> : null}
              <Input 
                {...registerSignUp('lastName', {
                  required: "Please fill in Email field"
                })} 
                type="text" 
                placeholder="Last Name" 
                name="lastName" 
                errors={errorsSignUp.lastName}
              />
              {errorsSignUp.lastName ? <Error>{errorsSignUp.lastName.message}</Error> : null}
              <Input 
                {...registerSignUp('email', {
                    required: "Please fill in Email field", 
                    validate: (email) => {
                      return [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/].every((pattern) => pattern.test(email))
                              || "Please fill in the right format of email";
                    }
                  })
                } 
                type="email" 
                placeholder="Email" 
                name="email" 
                errors={errorsSignUp.email}
              />
              {errorsSignUp.email ? <Error>{errorsSignUp.email.message}</Error> : null}
              <Input 
                {...registerSignUp('password', {
                    required: "Please fill in Password field", 
                    minLength: {value: 6, message: "Password must contain at least 6 chars"}, 
                    validate: (password) => {
                      return [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) => pattern.test(password)) || 
                              "Password must includes lower-upper-number-special chars";
                    }
                  })
                }
                type="password" 
                placeholder="Password" 
                name="password"
                errors={errorsSignUp.password} 
              />
              {errorsSignUp.password ? <Error>{errorsSignUp.password.message}</Error> : null}
              <Button type="submit" disabled={submitting}>Sign up</Button>
            </Form>
          </FormContainer>
          <FormContainer toggle={toggle} signInContainer={true}>
            <Form onSubmit={handleSubmitSignIn(onSubmit)}>
              <Title>Login to Your Account</Title>
              <p className="text-[#06202A] opacity-0 sm:opacity-100">Login using social networks</p>
              <SocialContainer size={width}>
                <SocialIcon href="#">f</SocialIcon>
                <SocialIcon href="#">G+</SocialIcon>
                <SocialIcon href="#">in</SocialIcon>
              </SocialContainer>
              {serverErrors ? <Error>{serverErrors}</Error> : null}
              <Input 
                {...registerSignIn('email', {
                    required: "Please fill in Email field", 
                    validate: (email) => {
                      return [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/].every((pattern) => pattern.test(email))
                              || "Please fill in the right format of email";
                    }
                  })
                } 
                type="email" 
                placeholder="Email" 
                name="email" 
                errors={errorsSignIn.email}
                size={width}
              />
              {errorsSignIn.email ? <Error>{errorsSignIn.email.message}</Error> : null}
              <Input 
                {...registerSignIn('password', {
                    required: "Please fill in Password field", 
                    minLength: {value: 6, message: "Password must contain at least 6 chars"}, 
                    validate: (password) => {
                      return [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) => pattern.test(password)) || 
                              "Password must includes lower-upper-number-special chars";
                    }
                  })
                } 
                type="password" 
                placeholder="Password" 
                name="password" 
                errors={errorsSignIn.password}
                size={width}
              />
              {errorsSignIn.password ? <Error>{errorsSignIn.password.message}</Error> : null}
              <Button type="submit" disabled={submitting}>Sign in</Button>
            </Form>
          </FormContainer>
          <OverlayContainer toggle={toggle}>
            <Overlay toggle={toggle}>
              <OverlayPanel overlayLeft={true}>
                <Title color="white">One Of Us</Title>
                <p className="text-white">If you already have an account,</p>
                <Para color="white">just sign in. We have missed you!</Para>
                <Button onClick={() => setToggle(false)} ghost={true}>Sign in</Button>
              </OverlayPanel>
              <OverlayPanel overlayRight={true}>
                <Title color="white">New Here</Title>
                <p className="text-white">Sign up and discover a great</p>
                <Para color="white">amount of new opportunities!</Para>
                <Button onClick={() => setToggle(true)} ghost={true}>Sign up</Button>
              </OverlayPanel>
            </Overlay>
          </OverlayContainer>
        </Container>
      </Body>
    );
}

export default Login;
