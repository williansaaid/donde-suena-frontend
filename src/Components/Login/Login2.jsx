import { useEffect } from "react";

export const LoginGoogle = () => {
    function handleCredentialResponse(response) {
        const body = { id_token: response.credential };
        fetch("http://localhost:3001/auth/google", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem("email", data.user.email);
                window.location.reload();
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        const google = window.google;
        const client_id =
            "683964699898-crca6epeuihk7scmvh5in9fm6k9dlk17.apps.googleusercontent.com";
        const callback = handleCredentialResponse;
        const auto_select = true;
        google?.accounts.id.initialize({
            client_id,
            callback,
            auto_select,
        });

        google?.accounts.id.prompt((notification) => {
            if (notification.isNotDisplayed()) {
                console.log("Error: Google Sign-In not displayed");
            } else if (notification.isSkippedMoment()) {
                console.log("El usuario ha decidido no iniciar sesión");
            }
        });
    }, []);

    const handleSignOut = () => {
        const google = window.google;
        google.accounts.id.disableAutoSelect();

        google.accounts.id.revoke(localStorage.getItem("email"), (done) => {
            localStorage.removeItem("email");
            window.location.reload();
        });
    };

    return (
        <div>
            <h1>Login with Google</h1>
            <div
                id="g_id_onload"
                data-client_id="683964699898-crca6epeuihk7scmvh5in9fm6k9dlk17.apps.googleusercontent.com"
                data-auto_prompt="false"
            ></div>
            <div
                className="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left"
            ></div>

            <button id="google_signout" onClick={() => handleSignOut()}>
                Signout
            </button>
        </div>
    );
};
