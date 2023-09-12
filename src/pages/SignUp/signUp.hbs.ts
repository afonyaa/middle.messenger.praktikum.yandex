// language=hbs
export default `<div class='sign-up-page'>
  <div class='double-container'>
    <div class='sign-up-page__description'>
      <h1>
        Web Chat
      </h1>
      <p>
        Share ideas, debate thoughts, or simply catch up on casual conversation.
      </p>
    </div>
    <form class='sign-up-form' name='sign_up_form'>
      <h1 class='sign-up-form__title'>
        Sign up
      </h1>
      <div class='sign-up-form__content'>
        <div>
          <label for='sign_in_email' class='base-input-label'>Email</label>
          <input
            id='sign_in_email'
            name='email'
            type='email'
            class='base-input-root'
          />
        </div>
        <div>
          <label for='sign_in_login' class='base-input-label'>Username</label>
          <input id='sign_in_login' name='login' class='base-input-root' />
        </div>
        <div>
          <label
            for='sign_in_firstname'
            class='base-input-label'
          >Firstname</label>
          <input
            id='sign_in_firstname'
            name='first_name'
            class='base-input-root'
          />
        </div>
        <div>
          <label for='sign_in_second_name' class='base-input-label'>Surname</label>
          <input id='sign_in_second_name' name='second_name' class='base-input-root' />
        </div>
        <div>
          <label for='sign_in_phone_number' class='base-input-label'>Phone number</label>
          <input
            id='sign_in_phone_number'
            type='tel'
            name='phone'
            class='base-input-root'
          />
        </div>
        <div>
          <label for='sign_in_password' class='base-input-label'>Password</label>
          <input
            id='sign_in_password'
            type='password'
            name='password'
            class='base-input-root'
          />
        </div>
        <div>
          <label for='sign_in_confirm_password' class='base-input-label'>Confirm
            password</label>
          <input
            id='sign_in_confirm_password'
            type='password'
            name='password_confirm'
            class='base-input-root'
          />
        </div>
          <button>Sign up</button>
        <div>
          Already have an account?
          <a>Sign in.</a>
        </div>
      </div>
    </form>
  </div>
</div>
`;
