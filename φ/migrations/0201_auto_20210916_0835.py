# Generated by Django 3.1.4 on 2021-09-16 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0200_auto_20210916_0802'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='auditdata',
            name='TheoricalOperatingIncomeAttributableToNonControllingInterests',
        ),
        migrations.AddField(
            model_name='auditdata',
            name='TargetWorkingCapital',
            field=models.FloatField(default=0),
        ),
    ]
