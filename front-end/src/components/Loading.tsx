import "./loading.css"
type LoadingProps = {
	loading?: boolean;
}

const Loading: React.FunctionComponent<LoadingProps> = (props) => {
	const {loading = false} = props;

  return (
		<>
			{loading && (
				<div className="loading">Loading&#8230;</div>
			)}
		</>
	)
};

export default Loading;
