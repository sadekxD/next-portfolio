import RcDrawer from "rc-drawer";

const Drawer = ({
	className,
	children,
	closeButton,
	closeButtonStyle,
	drawerHandler,
	toggleHandler,
	open,
	width,
	placement,
	drawerStyle,
	closeBtnStyle,
	...props
}) => {
	return (
		<>
			<RcDrawer
				open={open}
				onClose={toggleHandler}
				className="font-nuni"
				width={320}
				placement={placement}
				handler={false}
				level={null}
				duration="0.4s"
				{...props}
			>
				{closeButton && (
					<div className="px-4 py-2 flex justify-end">
						<div onClick={toggleHandler}>{closeButton}</div>
					</div>
				)}
				<div className="py-12 px-4">{children}</div>
			</RcDrawer>
			<div onClick={toggleHandler} className="block lg:hidden relative">
				{drawerHandler}
			</div>
		</>
	);
};

Drawer.defaultProps = {
	width: "320px",
	placement: "left",
};

export default Drawer;
