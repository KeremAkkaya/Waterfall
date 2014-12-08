#version 330

in vec4 colorFragIn;
in vec2 texCoord;

uniform sampler2D sampler;

out vec4 colorFragOut;

void main()
{
    vec4 texColor = texture2D(sampler, texCoord);
    colorFragOut = texColor * colorFragIn;
    //colorFragOut = colorFragIn; //vec4(0.0, 0.0, 1.0, 1.0);
}