# Generated by Django 3.1.4 on 2021-04-07 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0053_auto_20210407_1003'),
    ]

    operations = [
        migrations.AlterField(
            model_name='auditdata',
            name='Period',
            field=models.CharField(default=0, max_length=27),
        ),
        migrations.AlterField(
            model_name='cashflow',
            name='Period',
            field=models.CharField(default=0, max_length=27),
        ),
        migrations.AlterField(
            model_name='entity',
            name='Update',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='entity',
            name='UpdateDateAndTime',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='trialbalance',
            name='Period',
            field=models.CharField(default=0, max_length=27),
        ),
    ]
