# Generated by Django 3.1.4 on 2021-05-24 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0184_auto_20210524_1045'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entity',
            name='OpinionφFourthLastYear',
            field=models.CharField(max_length=55, null=True),
        ),
        migrations.AlterField(
            model_name='entity',
            name='OpinionφLastYear',
            field=models.CharField(max_length=55, null=True),
        ),
        migrations.AlterField(
            model_name='entity',
            name='OpinionφSecondLastYear',
            field=models.CharField(max_length=55, null=True),
        ),
        migrations.AlterField(
            model_name='entity',
            name='OpinionφThirdLastYear',
            field=models.CharField(max_length=55, null=True),
        ),
    ]
