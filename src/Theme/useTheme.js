

function useTheme(state,theme){
        if(state===true){
           return theme.dark;
        }else{
            return theme.light;
        }
}

export default useTheme;