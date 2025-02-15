import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import FormLayout from '../Form/FormLayout';
import InputIcon from '../Inputs/InputIcon';
import ButtonAuth from '../Buttons/ButtonAuth';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen " >
        <FormLayout status={isLogin} onChangeForm={() => { setIsLogin(!isLogin) }}>
          {isLogin ? <UserLogin /> : <UserRegister />}
        </FormLayout>

      </div>
    </>
  );
};

const UserLogin = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const logUser = async (event) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      console.log(`Logged in Successfully :`, userCredential.user);
      navigate('/');
    } catch (error) {
      console.error(`Error Logging in :`, error);
    }
  };

  return <from className='flex flex-col gap-3'>
    <InputIcon
      icon={<AiOutlineMail />}
      type="email"
      ref={emailRef}
      placeholder="Email..."
      autoComplete="username"
    />

    <InputIcon
      icon={<AiOutlineLock />}
      type='password'
      ref={passwordRef}
      placeholder="Mot de passe..."
      autoComplete="current-password"
    />
    <ButtonAuth onClick={logUser} text="Se connecter" />
  </from>
}
const UserRegister = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const register = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      console.log(`Signed up Successfully :`, userCredential.user);
      navigate('/');
    } catch (error) {
      console.error(`error Signing up :`, error);
    }
  };
  return <form className='flex flex-col gap-3'>
    <InputIcon
      className=""
      icon={<AiOutlineMail />}
      type="email"
      ref={emailRef}
      placeholder="Email..."
      autoComplete="username"
    />
    <InputIcon
      icon={<AiOutlineLock />}
      type='password'
      ref={passwordRef}
      placeholder="Mot de passe..."
      autoComplete="current-password"
    />
    <InputIcon
      icon={<AiOutlineLock />}
      type='password'
      ref={confirmPasswordRef}
      placeholder="Confirmer votre mot de passe..."
      autoComplete="current-password"
    />
    <ButtonAuth onClick={register} text="Créer mon compte" />
  </form>
}

export default Login;