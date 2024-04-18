"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Input from "../FormHelpers/Input";
import Button from "../FormHelpers/Button";
import SocialButton from "../FormHelpers/SocialButton";

const SigninForm = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => {
		setIsLoading(true);

		signIn("credentials", {
			...data,
			redirect: false,
		}).then((callback) => {
			setIsLoading(false);

			if (!callback?.error) {
				toast.success("Logged in");
				router.refresh();
			}

			if (callback?.error) {
				toast.error(callback.error);
			}
		});
	};

	return (
		<div className="authentication-area ptb-100 bg-color-fff5e1">
			<div className="container">
				<div className="authentication-content">
					<h3>Login</h3>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="authentication"
					>
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
								type="password"
								placeholder="Password"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>

						<div className="form-group mb-0">
							<Button label="Login" disabled={isLoading} />
						</div>
					</form>
					<SocialButton />
				</div>
			</div>
		</div>
	);
};

export default SigninForm;
