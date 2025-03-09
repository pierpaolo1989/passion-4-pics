import Header from "../components/Header";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createClient } from "@supabase/supabase-js";
import { LoginForm } from "../models/LoginForm";
import React from "react";

const supabase = createClient(
    "https://supabase.com/",
    "YOUR_SUPABASE_ANON_KEY"
);

function LoginPage() {

    const { register, handleSubmit } = useForm<LoginForm>();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: LoginForm) => {
        setLoading(true);
        setError(null);
        const { error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });
        setLoading(false);
        if (error) {
            setError(error.message);
        } else {
            alert("Login riuscito!");
            // Redirect o azioni dopo il login
        }
    };

    return (
        <>
            <Header />

            <section className="gallery1 cid-srZMqP1bME" id="gallery1-a">

                <div className="container">
                    <div id="login">
                        <h3 className="text-center text-white pt-5">Login form</h3>
                        <div className="container">
                            <div id="login-row" className="row justify-content-center align-items-center">
                                <div id="login-column" className="col-md-6">
                                    <div id="login-box" className="col-md-12">
                                        <form id="login-form" className="form" action="" method="post">
                                            <h3 className="text-center">Login</h3>
                                            <div className="form-group">
                                                <label for="username">Username:</label><br />
                                                <input
                                                    type="email"
                                                    {...register("email", { required: true })}
                                                    placeholder="Email"
                                                    className="w-full p-2 border rounded form-control"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="password">Password:</label><br />
                                                <input
                                                    type="password"
                                                    {...register("password", { required: true })}
                                                    placeholder="Password"
                                                    className="w-full p-2 border rounded form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label for="remember-me"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                                                <button
                                                    type="submit"
                                                    className="w-full bg-blue-500 text-white p-2 rounded bg-secondary"
                                                    disabled={loading}
                                                >
                                                    {loading ? "Caricamento..." : "Accedi"}
                                                </button>
                                            </div>
                                            <div id="register-link" className="text-right">
                                                <a href="#" className="text-info">Register here</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPage;