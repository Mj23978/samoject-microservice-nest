import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutSpacesInput } from './project-create-without-spaces.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutSpacesInput } from './project-create-or-connect-without-spaces.input';
import { ProjectUpsertWithoutSpacesInput } from './project-upsert-without-spaces.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutSpacesInput } from './project-update-without-spaces.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutSpacesNestedInput {

    @Field(() => ProjectCreateWithoutSpacesInput, {nullable:true})
    @Type(() => ProjectCreateWithoutSpacesInput)
    create?: ProjectCreateWithoutSpacesInput;

    @Field(() => ProjectCreateOrConnectWithoutSpacesInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutSpacesInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutSpacesInput;

    @Field(() => ProjectUpsertWithoutSpacesInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutSpacesInput)
    upsert?: ProjectUpsertWithoutSpacesInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutSpacesInput, {nullable:true})
    @Type(() => ProjectUpdateWithoutSpacesInput)
    update?: ProjectUpdateWithoutSpacesInput;
}
