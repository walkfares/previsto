export const getGames = (props) => {
    return props.stitchclient.callFunction("getGames");
}
