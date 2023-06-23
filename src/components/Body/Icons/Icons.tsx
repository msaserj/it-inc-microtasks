import React from "react";
import css from "./Icons.module.css"
import {
    SiExpress,
    SiGit,
    SiGithub,
    SiGitlab,
    SiJavascript,
    SiJest,
    SiLinux,
    SiLinuxmint,
    SiMui,
    SiNextdotjs,
    SiNginx,
    SiReact,
    SiRedux,
    SiStorybook,
    SiTypescript,
    SiVisualstudio,
    SiWebstorm
} from "react-icons/si";
import {IconComponent} from "./IconComponent/IconComponent";
import {FaNodeJs} from "react-icons/fa";
import {DiSass} from "react-icons/di";
import {AiOutlineHtml5} from "react-icons/ai";
import {TbBrandRadixUi} from "react-icons/tb";

export type PropsType = {}


export const Icons = (props: PropsType) => {

    const style: any = {width: '90%', height: '90%'}
    const tech: any = {
        typeScript: '#0075c5',
        javaScript: '#e8ce41',
        react: '#5ccfee',
        next: '#fff',
        redux: '#7046b2',
        nodejs: '#7cc327',
        express: '#fff',
        sass: '#c36192',
        html: '#f25320',
        jest: '#936271',
        ws: '#03b1c8',
        vs: '#0075c6',
        mui: '#0079f2',
        radix: '#6b44c1',
        git: '#e44c30',
        github: '#fff',
        gitlab: '#ef6724',
        storybook: '#f2437e',
        linux: '#f2a406',
        mint: '#64ac3c',
        nginx: '#419b45',
    }

    return (
        <div className={css.mainDiv}>
            <div className={css.div}>
                <div className={css.block} style={{marginLeft: '0'}}>
                    <IconComponent color={tech.typeScript}>
                        <SiTypescript style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.javaScript}>
                        <SiJavascript style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.react}>
                        <SiReact style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.next}>
                        <SiNextdotjs style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.redux}>
                        <SiRedux style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.nodejs}>
                        <FaNodeJs style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.express}>
                        <SiExpress style={style}/>
                    </IconComponent>
                </div>
                <div className={css.block} style={{marginLeft: '170px'}}>
                    <IconComponent color={tech.sass}>
                        <DiSass style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.html}>
                        <AiOutlineHtml5 style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.jest}>
                        <SiJest style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.ws}>
                        <SiWebstorm style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.vs}>
                        <SiVisualstudio style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.mui}>
                        <SiMui style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.radix}>
                        <TbBrandRadixUi style={style}/>
                    </IconComponent>
                </div>
                <div className={css.block} style={{marginLeft: '340px'}}>
                    <IconComponent color={tech.git}>
                        <SiGit style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.github}>
                        <SiGithub style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.gitlab}>
                        <SiGitlab style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.storybook}>
                        <SiStorybook style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.linux}>
                        <SiLinux style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.mint}>
                        <SiLinuxmint style={style}/>
                    </IconComponent>
                    <IconComponent color={tech.nginx}>
                        <SiNginx style={style}/>
                    </IconComponent>
                </div>
            </div>
        </div>


    )
}