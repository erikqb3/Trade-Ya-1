"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Input from "../FormHelpers/Input";
import Button from "../FormHelpers/Button";
import ImageUpload from "../FormHelpers/ImageUpload";

const UpdateSettingsForm = ({ currentUser }) =>{
  const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

  const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

  const {
		register,
		handleSubmit,
		setError,
		watch,
		setValue,
		formState: { errors },
		reset,
	} = useForm({
    defaultValues: {
      name: currentUser.name,
      image: currentUser.image ? currentUser.image : "",
      email: currentUser.email,

      bio: currentUser.profile && currentUser.profile.bio ? currentUser.profile.bio : "",
      gender: currentUser.profile && currentUser.profile.gender ? currentUser.profile.gender : "",
      address:currentUser.profile && currentUser.profile.address ? currentUser.profile.address : "",
      phone: currentUser.profile && currentUser.profile.phone ? currentUser.profile.phone : "",
		},
	});

  const image = watch("image");

	const onSubmit = (data) => {
		console.log(data);
		setIsLoading(true);
		axios
			.post("/api/profile/info", data)
			.then((response) => {
				toast.success("Profile Updated");
			})
			.then( //this_works
				axios.post("/api/profile/settings", data)
				.then((response) => {
					toast.success("Profile Updated");
					// router.refresh();
				})
				//then(signIn) //see signin form
			)
			// .then(
			// 	signIn("credentials", {
			// 		...data,
			// 		redirect: false,
			// 	}).then((callback) => {
			// 		setIsLoading(false);
					
			// 		if (!callback?.error) {

							//update password...// put this whole thing with the user Settings stuff

			// 		}
		
			// 		if (callback?.error) {
			// 			toast.error(callback.error);
			// 		}
			// 	})
			// )
			.catch((error) => {
				toast.error("Something went wrong.");
			})
			.catch((error) => {
				toast.error("Something went wrong.");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	const deleteUser = async (userId) => {
		const shouldDelete = window.confirm(
			"Are you sure you want to delete this user?"
		);

		// if (parseInt(userId) === currentUser.id) {
		// 	return toast.error("You can't delete your own ID!");
		// }

		if (shouldDelete) {
			await axios
				.delete(`/api/users/${userId}`)
				.then((response) => {
					router.refresh();
					redirect("/");
				})
				.catch((error) => {
					toast.error("Something went wrong!");
				});
		}
	};


  console.log("UpdateSettingsForm", currentUser)

  return (
  <>
    <div className="authentication-area">
			<div className="container">
				<div className="authentication-content">
					<h3>Update Profile</h3>
					<form
						className="authentication"
						onSubmit={handleSubmit(onSubmit)}
					>
            <div className="form-group">
							<ImageUpload
								onChange={(value) =>
									setCustomValue("image", value)
								}
								value={image}
							/>
						</div>
						<hr></hr>
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
								placeholder="Email"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>
						<hr></hr>
            <div className="form-group">
							<Input
								id="bio"
								placeholder="Bio"
								disabled={isLoading}
								register={register}
								errors={errors}
							/>
						</div>
            <div className="form-group">
							<Input
								id="address"
								placeholder="Address"
								disabled={isLoading}
								register={register}
								errors={errors}
							/>
						</div>
						<div className="form-group">
							<Input
								id="phone"
								placeholder="Phone"
								disabled={isLoading}
								register={register}
								errors={errors}
							/>
						</div>
						<div className="form-group mb-0">
							<Button
								label="Update My Info"
								disabled={isLoading}
							/>
						</div>
						<hr></hr>
						<div className="form-group mb-0">
							{/* <button 
								label="Delete" 
								disabled={isLoading} 
								onClick={() => deleteUser(currentUser.id)}
								/> */}
							<button
								className="btn btn-danger btn-sm btn-delete ms-2"
								onClick={() => deleteUser(currentUser.id)}
							>
								Delete
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
  </>
  )
}

export default UpdateSettingsForm;