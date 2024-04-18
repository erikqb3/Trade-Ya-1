"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Input from "../FormHelpers/Input";
import React, { useState } from "react";
import Button from "../FormHelpers/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SocialButton from "../FormHelpers/SocialButton";

const SignupForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const [showPassword, setShowPassword] = React.useState("false");
	const [type, setType] = React.useState('password');
	const [showOrHide, setShowOrdHide] = React.useState('Show');

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			myHistory: "[]",
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		console.log(data);
		axios
			.post("/api/register", data)
			.then(() => {
				toast.success("Registration success!");
				router.push("/auth/signin");
			})
			.catch((error) => {
				toast.error("Something went wrong!");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const onShowToggle = () => {
		setShowPassword(!showPassword);
		setType(showPassword ? "text": "password");
		setShowOrdHide(showPassword ? "Hide" : "Show");
	}

	return (
		<div className="authentication-area ptb-100 bg-color-fff5e1">
			<div className="container">
				<div className="authentication-content">
					<h3>Register</h3>
					<form
						className="authentication"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="form-group">
							<Input
								id="name"
								placeholder="Name"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>
						<div className="form-group">
							<Input
								id="email"
								type="email"
								placeholder="Email"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>
						<div className="form-group">
							<Input
								id="password"
								type={type}
								placeholder="Password"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>

						<div className="passwordHelp"> 
							{/* <span className="loginOption">
								<Link
									href="/"	
								>
									Forgot Password
								</Link>
							</span> */}
							<span 
								className="loginOption"
								onClick={onShowToggle}
							>{showOrHide} Password</span>
						</div>

						<div className="form-group mb-0">
							<Button label="Register" disabled={isLoading} />
						</div>
					</form>
					{/* <SocialButton /> */}
				</div>
			</div>
		</div>
	);
};

export default SignupForm;
