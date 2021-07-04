<template>
    <page>
        <ActionBar class="fab" title="RecipeDetail">
            <Label text="RecipeName" fontSize="24" verticalAlignment="center" />
            <ActionItem ios.systemIcon="7" ios.position="right" text="Compose" />
        </ActionBar>
        
        <StackLayout backgroundColor=#c9c9c3>
            <GridLayout height="40" columns="70, auto" rows="*" backgroundColor="#ffffff">
                <Label text="Category" row="0" col="0" color="#ffffff" backgroundColor="#D6C428" alignSelf="center" />
                <Label text="Last update on 2020/10/2 by minoru" row="0" col="1" color="#D6C428" backgroundColor="#ffffff" />
            </GridLayout>
            <Image height="220" src="https://lh3.googleusercontent.com/pkjHuAsV-oHxh1yLhNkmRdwaVto3YOzbJdDaGqhkv28h2Jy7KwZRsLmbj9_mep_3fgPCD6kfridXEL3iaTzGmrQkcmJdmM_4CwCHckvHh4bxR7VNKI3l-fyBjVDPlNXU7srwOW-Dsnc=w2400" stretch="aspectFill" />
        </StackLayout>
    </page>
</template>
