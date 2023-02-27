import useIsUnique from "@/provider/AppProvider/useIsUnique";

const IsUnique = () => {
	const { sharedUser } = useIsUnique();

	return <>{sharedUser === 1 ? <p>{`i'm unique!!`}</p> : <p>there are {Number(sharedUser) - 1} more people.</p>}</>;
};

export default IsUnique;
