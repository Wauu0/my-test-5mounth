import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const isRegistered = useSelector((state) => state.isRegistered);
  const registeredUsers = useSelector((state) => state.registeredUsers);

  const handleInputRegister = () => {
    if (!username || !password || !confirmPassword) {
      alert('Заполните все поля!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }

    if (registeredUsers.some((user) => user.username === username)) {
      alert('Такой пользователь с такими данными уже существует (');
      return;
    }

    dispatch({
      type: 'REGISTER_USER',
      payload: { username, password },
    });
    alert('Регистрация прошла успешно!');
  };

  return (
    <div>
      <h2>Форма регистрации</h2>
      <input
        type="text"
        placeholder="имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Подтвердите пароль"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleInputRegister}>Зарегистрироваться</button>
    </div>
  );
};

export default RegistrationForm;
